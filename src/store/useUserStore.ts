import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { AuthService } from "@/services";
import { User } from "@prisma/client";

type State = {
    listUser: User[] | [];
};

type Actions = {
    fetchListUser: () => void;
};

export const useUserStore = create<State & Actions>()(
    immer((set) => ({
        listUser: [],
        fetchListUser: async () => {
            const response = await AuthService.getUser();
            console.log("🚀 ~ fetchListUser: ~ response:", response);
            set({ listUser: response.data });
        }
    }))
);
