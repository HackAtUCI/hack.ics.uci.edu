"use client";

import React from "react";
import clsx from "clsx";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./Accordion.module.scss";

const Root = Accordion.Root;
Root.displayName = Accordion.Root.displayName;

const Item = Accordion.Item;
Item.displayName = Accordion.Item.displayName;

const Trigger = React.forwardRef<
	React.ElementRef<typeof Accordion.Trigger>,
	React.ComponentPropsWithoutRef<typeof Accordion.Trigger> & {}
>(({ children, className, ...props }, ref) => (
	<Accordion.Header>
		<Accordion.Trigger
			ref={ref}
			className={clsx(styles["accordion-trigger"], className)}
			{...props}
		>
			{children}
		</Accordion.Trigger>
	</Accordion.Header>
));
Trigger.displayName = Accordion.Trigger.displayName;

const Content = React.forwardRef<
	React.ElementRef<typeof Accordion.Content>,
	React.ComponentPropsWithoutRef<typeof Accordion.Content> & {}
>(({ children, className, ...props }, ref) => (
	<Accordion.Content
		ref={ref}
		className={clsx(styles["accordion-content"], className)}
		{...props}
	>
		{children}
	</Accordion.Content>
));
Content.displayName = Accordion.Content.displayName;

export { Root, Item, Trigger, Content };
