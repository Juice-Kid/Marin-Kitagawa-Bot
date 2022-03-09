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
			category: "moderation",
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
				caption: `Thx for using the cmd check your xp & don't forget to follow me:🔻.

run = async (M: ISimplifiedMessage): Promise<void> => {
    const user = M.sender.jid;
    const time = 86400000;
    const cd = await (await this.client.getUser(user)).lastDaily;
    if (time - (Date.now() - cd) > 0) {
      const timeLeft = ms(time - (Date.now() - cd));
      return void M.reply(
        `🟨 You claimed your daily gold recently. Claim again in *${timeLeft.hours} hour(s), ${timeLeft.minutes} minute(s), ${timeLeft.seconds} second(s)*`
      );
    }
    await this.client.addGold(user, 1000);
    await this.client.DB.user.updateOne(
      { jid: user },
      { $set: { lastDaily: Date.now() } }
    );
    return void M.reply(`🎉 *5000 gold* has been added to your wallet.`);


⭕𝙂𝙞𝙩𝙝𝙪𝙗;
https://github.com/Chey-san
📮𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢;
https://www.instagram.com/its_chey_7/			


⪼𝖲𝖾𝖾 𝗒𝖺𝗁 😉✨` }
        )
    }

