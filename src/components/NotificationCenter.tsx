import React, { forwardRef, HTMLAttributes, useCallback } from 'react';
import { NotificationCenterContainer, NotificationList, NotificationHeader, NotificationFooter, NotificationEmptyState } from './NotificationCenter.styles';
import type { NotificationCenterProps, NotificationItem } from './types';
import { InlineNotification } from '@veneer/core';

const NotificationCenter = forwardRef<HTMLDivElement, NotificationCenterProps>(({ 
  notifications, 
  onNotificationClick, 
  onClearAll, 
  emptyStateMessage = 'No notifications', 
  className, 
  ...rest
}, ref) => {
  const handleNotificationClick = useCallback((notification: NotificationItem) => {
    if (onNotificationClick) {
      onNotificationClick(notification);
    }
  }, [onNotificationClick]);

  const handleClearAllClick = useCallback(() => {
    if (onClearAll) {
      onClearAll();
    }
  }, [onClearAll]);

  return (
    <NotificationCenterContainer
      ref={ref}
      className={className}
      role="region"
      aria-label="Notification Center"
      {...rest}
    >
      <NotificationHeader>
        <h2>Notifications</h2>
        {notifications.length > 0 && (
          <button
            type="button"
            onClick={handleClearAllClick}
            aria-label="Clear all notifications"
          >
            Clear All
          </button>
        )}
      </NotificationHeader>

      {notifications.length === 0 ? (
        <NotificationEmptyState role="status" aria-live="polite">
          {emptyStateMessage}
        </NotificationEmptyState>
      ) : (
        <NotificationList>
          {notifications.map((notification) => (
            <li key={notification.id}>
              <InlineNotification
                variant={notification.variant}
                title={notification.title}
                description={notification.description}
                onClick={() => handleNotificationClick(notification)}
                action={notification.action}
                actionPlacement={notification.actionPlacement}
                aria-label={`Notification: ${notification.title}`}
              />
            </li>
          ))}
        </NotificationList>
      )}

      {notifications.length > 0 && (
        <NotificationFooter>
          <button
            type="button"
            onClick={handleClearAllClick}
            aria-label="Clear all notifications"
          >
            Clear All
          </button>
        </NotificationFooter>
      )}
    </NotificationCenterContainer>
  );
});

NotificationCenter.displayName = 'NotificationCenter';

export default React.memo(NotificationCenter);
