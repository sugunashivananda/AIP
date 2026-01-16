import React, { useState, useCallback, UIEvent } from 'react';
import { NotificationCenterContainer, Header, HeaderArea, NotificationList, NotificationItemStyled, Footer, CloseButton } from './NotificationCenter.styles';
import { NotificationCenterProps, NotificationItem } from './types';

const NotificationCenter: React.FC<NotificationCenterProps> = React.memo(({
  id,
  inline = false,
  items = [],
  leadingHeaderArea,
  trailingHeaderArea,
  onClose,
  onScrollEnd,
  placement = 'bottom-start',
  i18n = {
    actionButton: 'Action button',
    noNotifications: 'There are no notifications.',
    title: 'Notifications',
  },
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = useCallback((event: UIEvent) => {
    setIsOpen(false);
    if (onClose) {
      onClose(event);
    }
  }, [onClose]);

  const handleScroll = useCallback((event: UIEvent<HTMLElement>) => {
    const target = event.currentTarget;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      if (onScrollEnd) {
        onScrollEnd(event);
      }
    }
  }, [onScrollEnd]);

  if (!isOpen) return null;

  return (
    <NotificationCenterContainer
      id={id}
      role="region"
      aria-label={i18n.title}
      $inline={inline}
      $placement={placement}
      onScroll={handleScroll}
      tabIndex={0}
    >
      <Header>
        <HeaderArea>
          {leadingHeaderArea}
        </HeaderArea>
        <HeaderArea>
          {trailingHeaderArea}
          <CloseButton aria-label="Close Notification Center" onClick={handleClose}>
            ×
          </CloseButton>
        </HeaderArea>
      </Header>
      <main>
        {items.length === 0 ? (
          <p>{i18n.noNotifications}</p>
        ) : (
          <NotificationList>
            {items.map((item: NotificationItem) => (
              <NotificationItemStyled key={item.id} role="listitem" tabIndex={0} aria-live="polite">
                <h3>{item.title}</h3>
                <p>{item.message}</p>
                {item.action && (
                  <button onClick={item.action.onClick} aria-label={i18n.actionButton}>
                    {item.action.label}
                  </button>
                )}
              </NotificationItemStyled>
            ))}
          </NotificationList>
        )}
      </main>
      <Footer />
    </NotificationCenterContainer>
  );
});

NotificationCenter.displayName = 'NotificationCenter';

export default NotificationCenter;
