import { useState } from "react";
import RemoveConfirmationModal from "./Modals/RemoveConfirmationModal";
import PostModal from "./Modals/PostModal";

const PostCard = ({ post, onPostRemove }) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  if (!post) {
    return <div className="post-thumb post-thumb-empty"></div>;
  }
  const onImageLoad = (e) => {
    e.target.style.opacity = 1;
  };

  return (
    <>
      <div className="post-thumb" onClick={() => setShowPostModal(true)}>
        <div
          className="post-thumb-remove"
          onClick={(e) => {
            e.stopPropagation();
            setShowRemoveModal(true);
          }}
        >
          <img src="/icons/x.svg" />
        </div>
        <div className="post-thumb-image">
          <img src={post.thumbImageUrl} loading="lazy" onLoad={onImageLoad} />
        </div>
        {post.description && (
          <div className="post-thumb-description">{post.description}</div>
        )}
      </div>
      {showPostModal && (
        <PostModal post={post} onClose={() => setShowPostModal(false)} />
      )}
      {showRemoveModal && (
        <RemoveConfirmationModal
          onClose={() => setShowRemoveModal(false)}
          onRemove={() => {
            setShowRemoveModal(false);
            onPostRemove(post.postId);
          }}
        />
      )}
    </>
  );
};

export default PostCard;