export class SavedTicket {
  constructor(id, channelId, userId, title, details, createdAt) {
    this.id = id;
    this.channelId = channelId;
    this.userId = userId;
    this.title = title;
    this.details = details;
    this.createdAt = createdAt;
  }

  static fromJSON(data) {
    return new SavedTicket(
      data.id,
      data.channelId,
      data.userId,
      data.title,
      data.details,
      data.createdAt
    );
  }

  toJSON() {
    return {
      id: this.id,
      channelId: this.channelId,
      userId: this.userId,
      title: this.title,
      details: this.details,
      createdAt: this.createdAt,
    };
  }
}
