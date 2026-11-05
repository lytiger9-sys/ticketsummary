import { SlashCommandBuilder } from 'discord.js';
import { database } from '../utils/database.js';
import { formatting } from '../utils/formatting.js';

export default {
  data: new SlashCommandBuilder()
    .setName('저장정보')
    .setDescription('저장된 상담 내용을 조회합니다'),

  async execute(interaction) {
    const tickets = database.getChannelTickets(interaction.channelId);
    const formattedMessage = formatting.formatTicketsAsTable(tickets);

    await interaction.reply(formattedMessage);
  },
};
