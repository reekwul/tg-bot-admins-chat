import { Context } from "telegraf";

export interface ISessionData{
    [key:string]:unknown
}
export interface IBotContext extends Context {
    session:ISessionData
}