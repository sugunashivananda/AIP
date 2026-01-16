import type { ReactNode } from 'react';
import type { InlineNotificationVariant, InlineNotificationAction } from '@veneer/core';

export interface NotificationItem {
  id: string;
  title: string;
  description?: string;
  variant?: InlineNotificationVariant;
  action?: InlineNotificationAction;
  actionPlacement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
}

export interface NotificationCenterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of notifications to display
   */
  notifications: NotificationItem[];

  /**
   * Callback when a notification is clicked
   */
  onNotificationClick?: (notification: NotificationItem) => void;

  /**
   * Callback when the clear all button is clicked
   */
  onClearAll?: () => void;

  /**
   * Message to show when there are no notifications
   * @default "No notifications"
   */
  emptyStateMessage?: string;

  /**
   * Additional className for the container
   */
  className?: string;
}
