"use client";

import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import Link from "next/link";
import Image from 'next/image'

import styles from "./Nav.module.scss";

import Logo from "../../assets/logo.svg";

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={clsx(styles.listItemLink, className)}
          {...props}
          ref={forwardedRef}
        >
          <div className={styles.listItemHeading}>{title}</div>
          <p className={styles.listItemText}>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
ListItem.displayName = NavigationMenu.Link.displayName;

function AppNavbar() {

  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Link href="/">
        <Image
          className={styles.logo}
          src={Logo.src}
          width={50}
          height={50}
          alt="hack logo"
        />
      </Link>
      <NavigationMenu.Root className={styles.root}>
        <NavigationMenu.List className={styles.list}>
          <NavigationMenu.Item>
            <Link className={styles.link} href="/about">
              About
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <Link className={styles.link} href="/events">
                Events
              </Link>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={styles.content}>
              <ul className={clsx(styles.items, styles.two)}>
                <ListItem
                  title="Introduction"
                  href="/docs/primitives/overview/introduction"
                >
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem
                  title="Getting started"
                  href="/docs/primitives/overview/getting-started"
                >
                  A quick tutorial to get you up and running with Radix
                  Primitives.
                </ListItem>
                <ListItem
                  title="Styling"
                  href="/docs/primitives/overview/styling"
                >
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem
                  title="Animation"
                  href="/docs/primitives/overview/animation"
                >
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem
                  title="Accessibility"
                  href="/docs/primitives/overview/accessibility"
                >
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem
                  title="Releases"
                  href="/docs/primitives/overview/releases"
                >
                  Radix Primitives releases and their changelogs.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link className={styles.link} href="/sponsors">
              Sponsors
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link className={styles.link} href="/recruit">
              Recruitment
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link className={styles.link} href="/contact">
              Contact
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className={styles.indicator}>
            <div className={styles.arrow} />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className={styles.viewportPosition}>
          <NavigationMenu.Viewport className={styles.viewport} />
        </div>
      </NavigationMenu.Root>
    </header>
  );
}

export default AppNavbar;
