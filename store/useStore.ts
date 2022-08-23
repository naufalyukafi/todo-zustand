import create from "zustand";
import { IList, IZustand } from "../ts/interface";

export const useStore = create<IZustand>((set) => ({
    // initial state
    listTodos: [],
    listTodo: {
        id: 0,
        title: "",
        status: false
    },
    isEdit: false,
    // methods for manipulating state
    addTodo: (title: string) => {
        set((state) => ({
            listTodos: [
                ...state.listTodos,
                {
                    id: state.listTodos.length + 1,
                    title,
                    status: false,
                } as IList,
            ],
        }));
    },
    removeTodo: (id: number) => {
        set((state) => ({
            listTodos: state.listTodos.filter(el => el.id !== id)
        }))
    },
    getUpdateTodo: (el: IList) => {
        set(() => ({
            listTodo: el,
            isEdit: true
        }))
    },
    updateTodo: (title: string) => {
        set((state) => ({
            listTodos: state.listTodos.map(el => {
                if (el.id === state.listTodo.id) {
                    return {
                        ...el,
                        id: el.id,
                        status: false,
                        title: title
                    }
                }
                return el
            }),
            isEdit: false
        }))
    }

}));