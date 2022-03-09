/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "chey",
			description: "Boost your xp",
			category: "general",
			usage: `${client.config.prefix}chey`,
			baseXp: 1000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			'https://telegra.ph/file/99cdc6ee69cd7d1234e14.mp4'
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `Thx for using the cmd check your xp don't forget to follow me:🔻 . \n`,



⭕𝙂𝙞𝙩𝙝𝙪𝙗;
https://github.com/Chey-san
📮𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢;
https://instagram.com/its_chey_7			


		);
	};
}
