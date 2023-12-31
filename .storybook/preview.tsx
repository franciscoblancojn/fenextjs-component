import React from "react";
import type { Preview } from "@storybook/react";
import { PageProgress } from "../src/PageProgress";
import { NotificationPop } from "../src/Notification/Pop";

import "../styles/index.css";
import "../styles/font.css";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <div>
                <NotificationPop />
                <PageProgress />
                <Story />
            </div>
        ),
    ],
};

export default preview;
