
// Add interface for user data
export interface UserDocument {
    userReactions: any[];
    userNotifications: any[];
    userBookmarks: any[];
    username: string;
    img: string;
    groups: string[];
    userId: string;
}

// Messages Interfaces
export interface ConversationData {
    dateCreated?: string;
    users?: string[];
    messages: Message[];
    participants: string[];
    conversationId: string;
  }

export interface LocationData {
    latitude: number;
    longitude: number;
}
  
// Update the interface to match the Contact plugin's types
export interface ContactData {
    displayName: string | null;
    name?: {
      givenName?: string;
      familyName?: string;
    };
    phoneNumbers?: Array<{
      value?: string;
      type?: string;
      id?: string;
      pref?: boolean;
    }>;
}


// First, define interfaces for your data structures
export interface Message {
    sender: string;
    message: string;
    type: string;
    date: any; // or use Date or firebase.firestore.Timestamp
  }
  

  export interface Conversation {
    key: string;
    conversationId: string;
    friend?: any;
    date?: any;
    sender?: string;
    message?: string;
    unreadMessagesCount?: number;
    messagesRead?: number;
    // add other properties your conversation has
  }

  export interface Event {
    groupId: string;
    groupName: string;
    date: Date;
    time: string;
    title: string;
    location: string;
    videoLink?: string;
    bannerImage?: string;
    createdAt: Date;
  }
  
  export interface Group {
    name: string;
    posts: string[];
    // other properties
  }

  export interface Reaction {
    payload: any;
    id?: string;
    addedByUser: {
      addedByImg: string;
      addedByKey: string;
      addedByUsername: string;
    };
    dateCreated: string;
    reactionType: string;
  }
  export interface Checkin {
    payload: any;
    id?: string;
    addedByUser: {
      addedByImg: string;
      addedByKey: string;
      addedByUsername: string;
    };
    dateCreated: string;
  }
  // Add interface for user data
  export interface UserDocument {
    userReactions: any[];
    userNotifications: any[];
    userBookmarks: any[];
    username: string;
    img: string;
    groups: string[];
    // add other properties as needed
  }
  export interface PollOption {
    name: string;
    members: string[] | null;
  }
  // First, define your interfaces
  export interface Comment {
    id?: string;
    postId: string;
    content: string;
    addedByUser: {
      addedByKey: string;
      addedByUsername: string;
      addedByImg: string;
    };
    createdAt: any;
    parentId?: string; // Reference to parent comment
    likes?: number;
    likedBy?: string[]; // Array of user IDs who liked the comment
    replies?: Comment[]; // Array to hold replies
    showReplyInput?: boolean;
    replyText?: string;
  }
  export interface PollData {
    pollOptions: PollOption[];
    dateEnding: any; // Replace 'any' with proper Firebase Timestamp type if available
  }
