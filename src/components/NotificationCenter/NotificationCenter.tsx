import React, { useState, useCallback } from 'react';
import {
  NotificationCenterContainer,
  Header,
  Title,
  NotificationList,
  NotificationItem,
  NotificationMessage,
  NotificationTimestamp,
  CloseButton,
  ActionButton,
} from './NotificationCenter.styles';
import { NotificationCenterProps, NotificationItemType } from './types';

const NotificationCenter: React.FC<NotificationCenterProps> = ({
  id,
  items,
  onClose,
  onScrollEnd,
  leadingHeaderArea,
  trailingHeaderArea,
  i18n,
  inline = false,
  placement = 'bottom-start',
}) => {
  const [notifications, setNotifications] = useState<NotificationItemType[]>(items);

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      const target = event.currentTarget;
      if (target.scrollHeight - target.scrollTop === target.clientHeight) {
        if (onScrollEnd) onScrollEnd(event);
      }
    },
    [onScrollEnd]
  );

  const handleClose = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClose) onClose(event as unknown as UIEvent);
    },
    [onClose]
  );

  return (
    <NotificationCenterContainer
      id={id}
      role="region"
      aria-label={i18n?.title || 'Notification Center'}
      $inline={inline}
      $placement={placement}
      onScroll={handleScroll}
    >
      <Header>
        {leadingHeaderArea && <div>{leadingHeaderArea}</div>}
        <Title>{i18n?.title || 'Notifications'}</Title>
        {trailingHeaderArea && <div>{trailingHeaderArea}</div>}
        <CloseButton aria-label="Close Notification Center" onClick={handleClose}>
          &times;
        </CloseButton>
      </Header>
      <NotificationList>
        {notifications.length === 0 ? (
          <NotificationMessage>{i18n?.noNotifications || 'No notifications.'}</NotificationMessage>
        ) : (
          notifications.map(({ id, message, timestamp, actionLabel, onAction }) => (
            <NotificationItem key={id} tabIndex={0} role="article" aria-live="polite">
              <NotificationMessage>{message}</NotificationMessage>
              <NotificationTimestamp>{timestamp}</NotificationTimestamp>
              {actionLabel && onAction && (
                <ActionButton onClick={onAction} aria-label={actionLabel}>
                  {actionLabel}
                </ActionButton>
              )}
            </NotificationItem>
          ))
        )}
      </NotificationList>
    </NotificationCenterContainer>
  );
};

export default React.memo(NotificationCenter);

// --- NotificationCenter.styles.ts ---

// Content of NotificationCenter.styles.ts

// --- types.ts ---

// Content of types.ts

