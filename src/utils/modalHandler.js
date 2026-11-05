import { database } from './database.js';

export async function handleModalSubmit(interaction) {
  const title = interaction.fields.getTextInputValue('ticket_title');
  const details = interaction.fields.getTextInputValue('ticket_details');

  const ticket = database.saveTicket(interaction.channelId, title, details);

  await interaction.reply({
    content: `✅ 상담 내용이 저장되었습니다!\n**제목:** ${title}`,
    ephemeral: true,
  });
}
