import axios from "axios";
import { ISeminar } from "@/interfaces";
import useSWR from "swr";
import { toast } from "sonner";

export const API_URL = "http://localhost:3000/seminars";
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// define custom hooks for fetching seminars
export const useSeminars = () => {
  const { data, error, isLoading } = useSWR<ISeminar[]>(API_URL, fetcher);

  return {
    seminars: data,
    isLoading,
    isError: error,
  };
};

export const useSeminar = (id: ISeminar["id"] | undefined) => {
  const { data, error, isLoading } = useSWR<ISeminar>(
    //abort fetch if id is not provided
    id ? `${API_URL}/${id}` : null,
    fetcher,
  );

  return {
    seminar: data,
    isLoading,
    isError: error,
  };
};

export const deleteSeminar = async (id: ISeminar["id"]) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    console.log("Deleted seminar", res);
    if (res.status !== 200) toast.error("Не удалось удалить семинар");
    else toast.success("Success!");
  } catch (err) {
    console.error("Failed to delete seminar:", err);
    toast.error("Ошибка.");
  }
};

export const createSeminar = async (seminar: Partial<ISeminar>) => {
  try {
    const res = await axios.post(API_URL, seminar);
    if (res.status !== 201) toast.error("Ошибка. Не удалось создать семинар");
  } catch (err) {
    console.error("Failed to create seminar:", err);
    toast.error("Ошибка.");
  }
};

export const updateSeminar = async (
  id: ISeminar["id"],
  seminar: Partial<ISeminar>,
) => {
  try {
    const res = await axios.patch(`${API_URL}/${id}`, seminar);
    console.log("Updated seminar", res);
    if (res.status !== 200) toast.error("Ошибка. Не удалось обновить семинар");
  } catch (err) {
    toast.error("Ошибка.");
    console.error(`Failed to update seminar ${id}:`, err);
  }
};
