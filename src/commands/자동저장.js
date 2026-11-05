import { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('자동저장')
    .setDescription('상담 내용을 저장합니다'),

  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId('save_ticket_modal')
      .setTitle('상담 내용 저장');

    const titleInput = new TextInputBuilder()
      .setCustomId('ticket_title')
      .setLabel('제목')
      .setStyle(TextInputStyle.Short)
      .setRequired(true);

    const detailsInput = new TextInputBuilder()
      .setCustomId('ticket_details')
      .setLabel('세부사항')
      .setStyle(TextInputStyle.Paragraph)
      .setRequired(true);

    const firstActionRow = new ActionRowBuilder().addComponents(titleInput);
    const secondActionRow = new ActionRowBuilder().addComponents(detailsInput);

    modal.addComponents(firstActionRow, secondActionRow);

    await interaction.showModal(modal);
  },
};
