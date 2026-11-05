import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_DIR = join(__dirname, '../../data');
const TICKETS_FILE = join(DATA_DIR, 'tickets.json');

// 데이터 디렉토리 생성
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// 초기 파일 생성
if (!fs.existsSync(TICKETS_FILE)) {
  fs.writeFileSync(TICKETS_FILE, JSON.stringify({}, null, 2));
}

export const database = {
  // 채널의 모든 티켓 가져오기
  getChannelTickets(channelId) {
    const data = JSON.parse(fs.readFileSync(TICKETS_FILE, 'utf-8'));
    return data[channelId] || [];
  },

  // 티켓 저장
  saveTicket(channelId, title, details) {
    const data = JSON.parse(fs.readFileSync(TICKETS_FILE, 'utf-8'));
    if (!data[channelId]) {
      data[channelId] = [];
    }
    
    const ticket = {
      id: Date.now(),
      title,
      details,
      createdAt: new Date().toISOString(),
    };
    
    data[channelId].push(ticket);
    fs.writeFileSync(TICKETS_FILE, JSON.stringify(data, null, 2));
    return ticket;
  },

  // 채널 데이터 삭제
  deleteChannelData(channelId) {
    const data = JSON.parse(fs.readFileSync(TICKETS_FILE, 'utf-8'));
    delete data[channelId];
    fs.writeFileSync(TICKETS_FILE, JSON.stringify(data, null, 2));
  },
};
