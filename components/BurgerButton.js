import c from "classnames";
import { useRef, useState, useEffect, useContext } from "react";
import BurgerIcon from "./Icons/BurgerIcon";
import { useUser } from "../utils/auth/useUser";
import ZenIcon from "./Icons/ZenIcon";
import useNotifications from "../utils/hooks/useNotifications";
import { ActionsContext } from "../pages/app";

const BurgerButton = () => {
  const buttonRef = useRef();
  const { logout } = useUser();
  const [isActive, setIsActive] = useState(false);

  const {
    areNotificationsFetched,
    notifications,
    hasUnreadNotifications,
    fetchNotifications,
  } = useNotifications();

  const { showNotificationsModal } = useContext(ActionsContext);

  useEffect(() => {
    if (areNotificationsFetched) {
      showNotificationsModal({
        areNotificationsFetched,
        notifications,
      });
    }
  }, [showNotificationsModal, areNotificationsFetched, notifications]);

  useEffect(() => {
    const makeInactive = (e) =>
      e.target !== buttonRef.current &&
      !buttonRef.current.contains(e.target) &&
      setIsActive(false);
    window.addEventListener("click", makeInactive);
    return () => {
      window.removeEventListener("click", makeInactive);
    };
  }, []);

  return (
    <>
      <div className="popover-menu-button-wrapper">
        <button
          className={c("button-wrapper burger-button")}
          ref={buttonRef}
          onClick={() => setIsActive(!isActive)}
        >
          <span
            className={c(
              "button icon-button button-secondary button-white",
              isActive && "active"
            )}
            tabIndex="-1"
          >
            {hasUnreadNotifications && !isActive && <ZenIcon />}
            <BurgerIcon />
          </span>
        </button>
        {isActive && (
          <div className="popover-menu burger-menu">
            <div
              className="popover-menu-item"
              onClick={() => {
                showNotificationsModal({
                  areNotificationsFetched: false,
                  notifications: [],
                });
                fetchNotifications();
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ position: "relative" }}>
                  {hasUnreadNotifications && <ZenIcon />}
                  <img
                    src="/icons/bell.svg"
                    style={{ transform: "scale(1.05)" }}
                    className="icon"
                  />
                </span>
                <div>Notifications</div>
              </div>
            </div>
            <div className="popover-menu-item" onClick={logout}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/icons/logout.svg"
                  style={{ transform: "scale(1.05)" }}
                  className="icon"
                />
                <div>Log Out</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BurgerButton;
