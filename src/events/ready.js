export default {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`✅ 봇이 로그인되었습니다: ${client.user.tag}`);
  },
};
