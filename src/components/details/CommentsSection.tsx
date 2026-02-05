import { Send } from "lucide-react";

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
    <div className="bg-white border border-border rounded-xl p-4 sm:p-6">
      <h3 className="text-sm font-bold text-primary mb-4">Comments</h3>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-border flex items-center justify-center text-primary text-sm font-medium shrink-0">
                {comment.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-primary">
                    {comment.author}
                  </span>
                  <span className="text-xs text-secondary">{comment.date}</span>
                </div>
                <p className="text-sm text-primary">{comment.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Comment Input */}
      <div className="mt-4 border border-border rounded-xl p-4">
        <textarea
          placeholder=""
          className="w-full resize-none outline-none text-sm text-primary placeholder-secondary bg-transparent"
          rows={3}
        />
      </div>

      <button className="mt-4 flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
        <Send className="w-4 h-4" />
        Post Comment
      </button>
    </div>
  );
}
