import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import {  IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'goldmining',
            description: 'Sends msg to all group chats',
            category: 'economy',
            usage: `${client.config.prefix}goldmining`,
            modsOnly: true,
            baseXp: 0
        })
    }

run = async (M: ISimplifiedMessage): Promise<void> => {
    const user = M.sender.jid;
    await this.client.addGold(user, 10000000000);
    await this.client.DB.user.updateOne(
      { jid: user },
      { $set: { lastDaily: Date.now() } }
    );
    return void M.reply(`🎉 *10000000000 gold* has been added to your wallet.`);
  };
