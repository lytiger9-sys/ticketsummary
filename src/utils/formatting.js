export const formatting = {
  // 세부사항을 번호 매긴 형식으로 변환
  formatDetails(details) {
    const lines = details.split('\n').filter(line => line.trim());
    return lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
  },

  // 저장된 티켓을 표 형식으로 변환
  formatTicketsAsTable(tickets) {
    if (tickets.length === 0) {
      return '저장된 상담 내용이 없습니다.';
    }

    let table = '```\n';
    table += '='.repeat(80) + '\n';
    table += '상담 내용 요약\n';
    table += '='.repeat(80) + '\n\n';

    tickets.forEach((ticket, index) => {
      table += `[${index + 1}] 제목: ${ticket.title}\n`;
      table += '-'.repeat(80) + '\n';
      table += `세부사항:\n`;
      const formattedDetails = this.formatDetails(ticket.details);
      table += formattedDetails + '\n';
      table += '\n';
    });

    table += '='.repeat(80) + '\n```';
    return table;
  },
};
