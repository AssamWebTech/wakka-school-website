export type EventType = {
    id: number,
    title: string,
    date: string,
    time: string,
    description: string
}
export type Achievement = {
    id: number,
    name: string,
    description: string,
    image: any
}
export type Teacher = {
    id: number,
    name: string,
    subject: string,
    bio: string,
    image: any
}
export type Notice = {
    id: number,
    title: string,
    details: string
}