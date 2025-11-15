import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Sparkles, Footprints, Droplets, Pill } from 'lucide-react';

// Типы данных
export interface Contact {
  phoneNumber: string;
  name: string;
  relationship: string;
  photo: string;
}

export interface Task {
  id: string;
  title: string;
  icon: React.ReactNode;
  completed: boolean;
  points: number;
}

export interface Reminder {
  id: string;
  medicationName: string;
  time: string;
  dosage: string;
  taken: boolean;
}

export interface FeedPost {
  id: string;
  authorName: string;
  authorPhoto: string;
  photo: string;
  caption?: string;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  commentsList?: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

export interface Event {
  id: string;
  title: string;
  type: string;
  location: string;
  distance: string;
  date: string;
  time: string;
  photo: string;
  description: string;
  seniorFriendly: boolean;
}

interface AppContextType {
  // Contacts
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  removeContact: (phoneNumber: string) => void;
  
  // Tasks
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
  
  // Reminders
  reminders: Reminder[];
  addReminder: (reminder: Omit<Reminder, 'id'>) => void;
  updateReminder: (reminderId: string, updates: Partial<Reminder>) => void;
  deleteReminder: (reminderId: string) => void;
  
  // Feed Posts
  feedPosts: FeedPost[];
  addFeedPost: (post: Omit<FeedPost, 'id' | 'timestamp' | 'likes' | 'comments' | 'isLiked'>) => void;
  likePost: (postId: string) => void;
  addComment: (postId: string, comment: Omit<Comment, 'id' | 'timestamp'>) => void;
  
  // Events
  events: Event[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  
  // Save/Load
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [feedPosts, setFeedPosts] = useState<FeedPost[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('seniorConnect_tasks');
    const savedReminders = localStorage.getItem('seniorConnect_reminders');
    
    // Only initialize defaults if no data exists
    if (!savedTasks && !savedReminders) {
      // Initialize default tasks
      const defaultTasks: Task[] = [
        {
          id: '1',
          title: 'Утренняя зарядка',
          icon: <Sparkles className="w-6 h-6 text-orange-500" />,
          completed: false,
          points: 10,
        },
        {
          id: '2',
          title: 'Прогулка',
          icon: <Footprints className="w-6 h-6 text-green-500" />,
          completed: false,
          points: 15,
        },
        {
          id: '3',
          title: 'Выпить воды',
          icon: <Droplets className="w-6 h-6 text-blue-500" />,
          completed: false,
          points: 5,
        },
      ];
      
      // Initialize default reminders
      const defaultReminders: Reminder[] = [
        {
          id: '1',
          medicationName: 'Таблетки от давления',
          time: '08:00',
          dosage: '1 таблетка',
          taken: false,
        },
        {
          id: '2',
          medicationName: 'Витамин D',
          time: '12:00',
          dosage: '1 капсула',
          taken: false,
        },
      ];
      
      setTasks(defaultTasks);
      setReminders(defaultReminders);
    } else {
      // Load existing data
      try {
        const savedContacts = localStorage.getItem('seniorConnect_contacts');
        const savedTasksData = localStorage.getItem('seniorConnect_tasks');
        const savedRemindersData = localStorage.getItem('seniorConnect_reminders');
        const savedFeedPosts = localStorage.getItem('seniorConnect_feedPosts');
        const savedEvents = localStorage.getItem('seniorConnect_events');

        if (savedContacts) setContacts(JSON.parse(savedContacts));
        if (savedTasksData) setTasks(JSON.parse(savedTasksData));
        if (savedRemindersData) setReminders(JSON.parse(savedRemindersData));
        if (savedFeedPosts) setFeedPosts(JSON.parse(savedFeedPosts));
        if (savedEvents) setEvents(JSON.parse(savedEvents));
      } catch (error) {
        console.error('Failed to load from localStorage:', error);
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    saveToLocalStorage();
  }, [contacts, tasks, reminders, feedPosts, events]);

  // Contacts
  const addContact = (contact: Contact) => {
    if (!contacts.some(c => c.phoneNumber === contact.phoneNumber)) {
      setContacts([...contacts, contact]);
    }
  };

  const removeContact = (phoneNumber: string) => {
    setContacts(contacts.filter(c => c.phoneNumber !== phoneNumber));
  };

  // Tasks
  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Reminders
  const addReminder = (reminder: Omit<Reminder, 'id'>) => {
    const newReminder: Reminder = {
      ...reminder,
      id: Date.now().toString(),
    };
    setReminders([...reminders, newReminder]);
  };

  const updateReminder = (reminderId: string, updates: Partial<Reminder>) => {
    setReminders(reminders.map(reminder => 
      reminder.id === reminderId ? { ...reminder, ...updates } : reminder
    ));
  };

  const deleteReminder = (reminderId: string) => {
    setReminders(reminders.filter(reminder => reminder.id !== reminderId));
  };

  // Feed Posts
  const addFeedPost = (post: Omit<FeedPost, 'id' | 'timestamp' | 'likes' | 'comments' | 'isLiked'>) => {
    const newPost: FeedPost = {
      ...post,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: 0,
      isLiked: false,
      commentsList: [],
    };
    setFeedPosts([newPost, ...feedPosts]);
  };

  const likePost = (postId: string) => {
    setFeedPosts(feedPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
        };
      }
      return post;
    }));
  };

  const addComment = (postId: string, comment: Omit<Comment, 'id' | 'timestamp'>) => {
    const newComment: Comment = {
      ...comment,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    };
    
    setFeedPosts(feedPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: (post.comments || 0) + 1,
          commentsList: [...(post.commentsList || []), newComment],
        };
      }
      return post;
    }));
  };

  // Events
  const addEvent = (event: Omit<Event, 'id'>) => {
    const newEvent: Event = {
      ...event,
      id: Date.now().toString(),
    };
    setEvents([...events, newEvent]);
  };

  // LocalStorage
  const saveToLocalStorage = () => {
    try {
      localStorage.setItem('seniorConnect_contacts', JSON.stringify(contacts));
      localStorage.setItem('seniorConnect_tasks', JSON.stringify(tasks));
      localStorage.setItem('seniorConnect_reminders', JSON.stringify(reminders));
      localStorage.setItem('seniorConnect_feedPosts', JSON.stringify(feedPosts));
      localStorage.setItem('seniorConnect_events', JSON.stringify(events));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  };

  const loadFromLocalStorage = () => {
    try {
      const savedContacts = localStorage.getItem('seniorConnect_contacts');
      const savedTasks = localStorage.getItem('seniorConnect_tasks');
      const savedReminders = localStorage.getItem('seniorConnect_reminders');
      const savedFeedPosts = localStorage.getItem('seniorConnect_feedPosts');
      const savedEvents = localStorage.getItem('seniorConnect_events');

      if (savedContacts) setContacts(JSON.parse(savedContacts));
      if (savedTasks) setTasks(JSON.parse(savedTasks));
      if (savedReminders) setReminders(JSON.parse(savedReminders));
      if (savedFeedPosts) setFeedPosts(JSON.parse(savedFeedPosts));
      if (savedEvents) setEvents(JSON.parse(savedEvents));
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
    }
  };

  const value: AppContextType = {
    contacts,
    addContact,
    removeContact,
    tasks,
    addTask,
    updateTask,
    deleteTask,
    reminders,
    addReminder,
    updateReminder,
    deleteReminder,
    feedPosts,
    addFeedPost,
    likePost,
    addComment,
    events,
    addEvent,
    saveToLocalStorage,
    loadFromLocalStorage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

