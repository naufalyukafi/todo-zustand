import { type } from "os"

interface IListTodo {
    title: string,
    onEdit: () => void,
    onDelete: () => void
}

interface IList {
    id: number,
    title: string,
    status: boolean
}

interface IZustand {
    listTodos: IList[],
    listTodo: IList,
    isEdit: boolean,
    addTodo: (title: string) => void,
    removeTodo: (id: number) => void,
    getUpdateTodo: (el: IList) => void,
    updateTodo: (title: string) => void
}

export type {
    IListTodo,
    IList,
    IZustand
}