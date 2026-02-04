import { Send } from 'lucide-react';
import { Avatar } from '../ui';

interface Comment {
  id: number;
  author: string;
  initials: string;
  date: string;
  content: string;
}

interface CommentsSectionProps {
  comments: Comment[];
}

export default function CommentsSection({ comments }: CommentsSectionProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <h3 className="text-base font-bold text-primary mb-4">Comments</h3>
      
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Avatar name={comment.author} size="sm" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-primary">{comment.author}</span>
                  <span className="text-sm text-secondary">{comment.date}</span>
                </div>
                <p className="text-sm text-primary">{comment.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Comment Input */}
      <div className="mt-4 bg-white border border-border rounded-xl p-4">
        <textarea
          placeholder="Add a comment..."
          className="w-full resize-none outline-none text-sm text-primary placeholder-secondary"
          rows={3}
        />
      </div>

      <button className="mt-4 flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg text-base hover:bg-primary/90 transition-colors">
        <Send className="w-4 h-4" />
        Post Comment
      </button>
    </div>
  );
}
