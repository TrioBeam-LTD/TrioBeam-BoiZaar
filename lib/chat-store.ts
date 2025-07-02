import { create } from "zustand"

interface Message {
  text: string
  sender: "me" | "other"
  time: string
}

interface Conversation {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
}

interface ChatStore {
  conversations: Conversation[]
  messages: Record<string, Message[]>
  sendMessage: (conversationId: string, text: string) => void
  markAsRead: (conversationId: string) => void
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=48&width=48",
    lastMessage: "Is the book still available?",
    time: "2m",
    unread: 2,
    online: true,
  },
  {
    id: "2",
    name: "Mike Chen",
    avatar: "/placeholder.svg?height=48&width=48",
    lastMessage: "Thanks for the book recommendation!",
    time: "1h",
    unread: 0,
    online: false,
  },
  {
    id: "3",
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=48&width=48",
    lastMessage: "Would you be interested in a trade?",
    time: "3h",
    unread: 1,
    online: true,
  },
  {
    id: "4",
    name: "David Brown",
    avatar: "/placeholder.svg?height=48&width=48",
    lastMessage: "Great doing business with you!",
    time: "1d",
    unread: 0,
    online: false,
  },
]

const mockMessages: Record<string, Message[]> = {
  "1": [
    { text: "Hi! I saw your listing for The Great Gatsby", sender: "other", time: "10:30 AM" },
    { text: "Hello! Yes, it's still available", sender: "me", time: "10:32 AM" },
    { text: "Is the book still available?", sender: "other", time: "10:35 AM" },
    { text: "Yes, would you like to meet up?", sender: "me", time: "10:36 AM" },
  ],
  "2": [
    { text: "Hey, do you have any sci-fi recommendations?", sender: "other", time: "9:15 AM" },
    { text: "Have you read Dune by Frank Herbert?", sender: "me", time: "9:20 AM" },
    { text: "No, but I've heard great things about it", sender: "other", time: "9:22 AM" },
    { text: "Thanks for the book recommendation!", sender: "other", time: "9:25 AM" },
  ],
  "3": [
    { text: "I have a copy of 1984 if you're interested", sender: "other", time: "8:45 AM" },
    { text: "That sounds great! What would you want in exchange?", sender: "me", time: "8:50 AM" },
    { text: "Would you be interested in a trade?", sender: "other", time: "8:52 AM" },
  ],
  "4": [
    { text: "The book arrived in perfect condition", sender: "other", time: "Yesterday" },
    { text: "Glad to hear that! Enjoy the read", sender: "me", time: "Yesterday" },
    { text: "Great doing business with you!", sender: "other", time: "Yesterday" },
  ],
}

export const useChatStore = create<ChatStore>((set, get) => ({
  conversations: mockConversations,
  messages: mockMessages,
  sendMessage: (conversationId, text) => {
    const now = new Date()
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    set((state) => ({
      messages: {
        ...state.messages,
        [conversationId]: [...(state.messages[conversationId] || []), { text, sender: "me", time }],
      },
      conversations: state.conversations.map((conv) =>
        conv.id === conversationId ? { ...conv, lastMessage: text, time: "now" } : conv,
      ),
    }))
  },
  markAsRead: (conversationId) => {
    set((state) => ({
      conversations: state.conversations.map((conv) => (conv.id === conversationId ? { ...conv, unread: 0 } : conv)),
    }))
  },
}))
