import { Heart, MessageCircle, Clock, Send, Mic, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScreenHeader } from './ScreenHeader';

interface FeedPost {
  id: string;
  authorName: string;
  authorPhoto: string;
  photo: string;
  caption?: string;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

const initialPosts: FeedPost[] = [
  {
    id: '1',
    authorName: 'Sarah',
    authorPhoto: 'https://images.unsplash.com/photo-1630939687530-241d630735df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzExODIzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    photo: 'https://images.unsplash.com/photo-1726731819337-d337f181bd85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkaW5uZXIlMjBoYXBweXxlbnwxfHx8fDE3NjMyMDE5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Sunday dinner with the family! Missing you ❤️',
    timestamp: '2 hours ago',
    likes: 12,
    comments: 3,
    isLiked: false
  },
  {
    id: '2',
    authorName: 'Emma',
    authorPhoto: 'https://images.unsplash.com/photo-1758686254563-5c5ab338c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2MzE5NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    photo: 'https://images.unsplash.com/photo-1617362253085-742c88e3385c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZG1vdGhlciUyMGdyYW5kY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc2MzIwMTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Playing in the backyard today!',
    timestamp: '5 hours ago',
    likes: 8,
    comments: 2,
    isLiked: true
  },
  {
    id: '3',
    authorName: 'Michael',
    authorPhoto: 'https://images.unsplash.com/photo-1762708590808-c453c0e4fb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxOTM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    photo: 'https://images.unsplash.com/photo-1639165426321-f3520a0a555c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwYXJrJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjMyMDE5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Beautiful day at the park with the kids',
    timestamp: '1 day ago',
    likes: 15,
    comments: 5,
    isLiked: false
  },
  {
    id: '4',
    authorName: 'Sarah',
    authorPhoto: 'https://images.unsplash.com/photo-1630939687530-241d630735df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzExODIzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    photo: 'https://images.unsplash.com/photo-1664289597477-d5b2d266169d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjMxNzA5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: "Dad's birthday celebration! 🎉",
    timestamp: '2 days ago',
    likes: 20,
    comments: 8,
    isLiked: true
  },
  {
    id: '5',
    authorName: 'Robert',
    authorPhoto: 'https://images.unsplash.com/photo-1758686253859-8ef7e940096e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMTk2MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    photo: 'https://images.unsplash.com/photo-1719728615484-063bf2ab17c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBmbG93ZXJzJTIwbmF0dXJlfGVufDF8fHx8MTc2MzEzODMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'My garden is blooming beautifully this year',
    timestamp: '3 days ago',
    likes: 10,
    comments: 4,
    isLiked: false
  }
];

export function FamilyFeedScreen({ onMenuClick, onTextSizeToggle, textSizeMultiplier = 1 }: { onMenuClick?: () => void; onTextSizeToggle?: () => void; textSizeMultiplier?: number }) {
  const [posts, setPosts] = useState(initialPosts);
  const [commentText, setCommentText] = useState<{[key: string]: string}>({});
  const [showComments, setShowComments] = useState<{[key: string]: boolean}>({});
  const [isVoiceInput, setIsVoiceInput] = useState(false);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const handleComment = (postId: string, authorName: string) => {
    setShowComments({ ...showComments, [postId]: !showComments[postId] });
  };

  const handleVoiceComment = (postId: string) => {
    setIsVoiceInput(true);
    
    // Simulate voice-to-text
    setTimeout(() => {
      const voiceComments = [
        "Beautiful photo! Love seeing the family together.",
        "This looks wonderful! Hope you had a great time.",
        "Such a lovely moment! Thanks for sharing.",
        "Amazing! Can't wait to see you all soon."
      ];
      const randomComment = voiceComments[Math.floor(Math.random() * voiceComments.length)];
      setCommentText({ ...commentText, [postId]: randomComment });
      setIsVoiceInput(false);
    }, 2000);
  };

  const handleSendComment = (postId: string) => {
    const comment = commentText[postId];
    if (comment && comment.trim()) {
      alert(`Comment sent: "${comment}"`);
      setCommentText({ ...commentText, [postId]: '' });
      setShowComments({ ...showComments, [postId]: false });
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Header */}
      <ScreenHeader
        onMenuClick={onMenuClick}
        onTextSizeToggle={onTextSizeToggle}
        textSizeMultiplier={textSizeMultiplier}
        showTasksButton={false}
      />

      <div className="p-6 space-y-6">
        {/* Page Title */}
        <div className="flex items-center gap-4">
          <ImageIcon className="w-10 h-10 text-blue-600" strokeWidth={2.5} />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Family Photos</h1>
            <p className="text-xl text-gray-600">See what your family is sharing</p>
          </div>
        </div>

        {/* Feed Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-6 flex items-center gap-4">
                <ImageWithFallback
                  src={post.authorPhoto}
                  alt={post.authorName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800">{post.authorName}</h3>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-5 h-5" />
                    <p className="text-lg">{post.timestamp}</p>
                  </div>
                </div>
              </div>

              {/* Post Image */}
              <div className="relative">
                <ImageWithFallback
                  src={post.photo}
                  alt={`Photo by ${post.authorName}`}
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Caption */}
              {post.caption && (
                <div className="px-6 py-4">
                  <p className="text-xl text-gray-700 leading-relaxed">{post.caption}</p>
                </div>
              )}

              {/* Engagement Stats */}
              <div className="px-6 py-3 border-t-2 border-gray-100">
                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Heart className={`w-6 h-6 ${post.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    <span className="text-xl font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-xl font-semibold">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 grid grid-cols-2 gap-3 border-t-2 border-gray-100">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center justify-center gap-3 p-5 rounded-2xl text-xl font-bold transition-all active:scale-95 ${
                    post.isLiked
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-8 h-8 ${post.isLiked ? 'fill-red-600' : ''}`} strokeWidth={2.5} />
                  {post.isLiked ? 'Liked' : 'Like'}
                </button>

                <button
                  onClick={() => handleComment(post.id, post.authorName)}
                  className="flex items-center justify-center gap-3 bg-blue-100 text-blue-700 p-5 rounded-2xl text-xl font-bold hover:bg-blue-200 transition-all active:scale-95"
                >
                  <MessageCircle className="w-8 h-8" strokeWidth={2.5} />
                  Comment
                </button>
              </div>

              {/* Comment Section */}
              {showComments[post.id] && (
                <div className="p-6 border-t-4 border-gray-100 bg-gray-50">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Add a Comment</h4>
                  
                  {/* Text Input */}
                  <textarea
                    value={commentText[post.id] || ''}
                    onChange={(e) => setCommentText({ ...commentText, [post.id]: e.target.value })}
                    placeholder="Write your comment here..."
                    className="w-full text-2xl p-5 border-4 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none mb-4 min-h-[120px]"
                    rows={3}
                  />

                  {/* Voice Input Button */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleVoiceComment(post.id)}
                      disabled={isVoiceInput}
                      className={`flex items-center justify-center gap-3 p-5 rounded-2xl text-xl font-bold transition-all active:scale-95 ${
                        isVoiceInput
                          ? 'bg-red-500 text-white animate-pulse'
                          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                      }`}
                    >
                      <Mic className="w-8 h-8" strokeWidth={2.5} />
                      {isVoiceInput ? 'Listening...' : 'Voice Comment'}
                    </button>

                    <button
                      onClick={() => handleSendComment(post.id)}
                      disabled={!commentText[post.id] || !commentText[post.id].trim()}
                      className={`flex items-center justify-center gap-3 p-5 rounded-2xl text-xl font-bold transition-all ${
                        commentText[post.id] && commentText[post.id].trim()
                          ? 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-8 h-8" strokeWidth={2.5} />
                      Send
                    </button>
                  </div>

                  {/* Sample Comments */}
                  <div className="mt-6 space-y-4">
                    <div className="bg-white rounded-2xl p-5 border-2 border-gray-200">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-blue-700">You</span>
                        </div>
                        <span className="text-xl font-bold text-gray-800">Your previous comment</span>
                      </div>
                      <p className="text-xl text-gray-700">This is beautiful! Love you all! ❤️</p>
                      <p className="text-base text-gray-500 mt-2">2 hours ago</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}