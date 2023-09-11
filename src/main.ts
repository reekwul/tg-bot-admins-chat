import {session, Telegraf} from "telegraf";
import config from "config"
import {IBotContext} from "./context/context.interface";
import {Command} from "./commands/command.class";
import {StartCommand} from "./commands/start.command";

class Bot {
    bot:Telegraf<IBotContext>;
    commands: Command[] = []

    constructor(private readonly token:string) {
        this.bot = new Telegraf<IBotContext>(this.token)
        this.bot.use(session())
    }

    init(){
        this.commands = [new StartCommand(this.bot)]

        this.commands.forEach((command)=>{
            command.handle()
        })

        this.bot.launch()
    }
}

const bot = new Bot(config.get("TOKEN"))
bot.init()

