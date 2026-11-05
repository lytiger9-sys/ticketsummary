import { database } from '../utils/database.js';

export default {
  name: 'channelDelete',
  execute(channel) {
    database.deleteChannelData(channel.id);
    console.log(`🗑️ 채널 ${channel.id}의 데이터가 삭제되었습니다.`);
  },
};
