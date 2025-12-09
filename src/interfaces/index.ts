// Interfaces for the Thread
export interface User {
 id:string,
 name: string,
 username: string,
 avatar: string
}

export interface ThreadStats {
    likes: number,
    repost?: number,
    coments?:number
}