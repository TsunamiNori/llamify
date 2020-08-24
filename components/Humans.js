import Human from "../components/Human";

export const Humans = ({
  humans,
  teamId,
  currentUserId,
  onHumanEditSubmit,
  onShowPostSubmitModal,
  onPostRemove,
  searchString,
}) => {
  return humans.map((human) => (
    <Human
      key={human.id}
      human={human}
      teamId={teamId}
      isOwner={human.id === currentUserId}
      onHumanEditSubmit={onHumanEditSubmit}
      onShowPostSubmitModal={onShowPostSubmitModal}
      onPostRemove={onPostRemove}
      searchString={searchString && searchString.length >= 2 && searchString}
    />
  ));
};

export default Humans;