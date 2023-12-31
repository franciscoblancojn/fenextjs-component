import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Modal, ModalProps } from "./index";
import { LayoutGridMenuTopLeft } from "./../../Layout/Grid/GridMenuTopLeft";
import { Button } from "../../Button";

export default {
    title: "Modal/Modal",
    component: Modal,
} as Meta;

const Profile: Story<PropsWithChildren<ModalProps>> = (args) => (
    <Modal {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    ElementActionModalActive: (
        <>
            <Button>Button Modal</Button>
            <div style={{width:"10px",height:"200vh"}}>

            </div>
        </>
    ),
    children: (
        <>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
        </>
    ),
    typeClose:'inset',
    disabledClose:false

} as ModalProps;

const WithLayout_: Story<PropsWithChildren<ModalProps>> = (args) => (
    <LayoutGridMenuTopLeft>
        <Modal {...args} />
    </LayoutGridMenuTopLeft>
);

export const WithLayout = WithLayout_.bind({});
WithLayout.args = {
    type: "layout-grid",
    ElementActionModalActive: (
        <>
            <Button>Button Modal</Button>
        </>
    ),
    children: (
        <>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
        </>
    ),
} as ModalProps;

const ModalInModal_: Story<PropsWithChildren<ModalProps>> = (args) => (
    <Modal {...args} ElementActionModalActive={<Button>Button Modal</Button>}>
        <h1>Title</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            error illo iusto, ex esse ullam aliquam officia praesentium labore
            reprehenderit nostrum quidem exercitationem blanditiis est illum
            pariatur veritatis magni corporis!
        </p>
        <Modal
            {...args}
            ElementActionModalActive={<Button>Button Modal 2</Button>}
            type="full"
        >
            <h1>Title 2</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <Modal
                {...args}
                ElementActionModalActive={<Button>Button Modal 3</Button>}
                type="bottom"
            >
                <h1>Title 3</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias error illo iusto, ex esse ullam aliquam officia
                    praesentium labore reprehenderit nostrum quidem
                    exercitationem blanditiis est illum pariatur veritatis magni
                    corporis!
                </p>
                <Modal
                    {...args}
                    ElementActionModalActive={<Button>Button Modal 4</Button>}
                    type="left"
                >
                    <h1>Title 4</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias error illo iusto, ex esse ullam aliquam
                        officia praesentium labore reprehenderit nostrum quidem
                        exercitationem blanditiis est illum pariatur veritatis
                        magni corporis!
                    </p>
                    <Modal
                        {...args}
                        ElementActionModalActive={
                            <Button>Button Modal 5</Button>
                        }
                        type="right"
                    >
                        <h1>Title 5</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestias error illo iusto, ex esse ullam
                            aliquam officia praesentium labore reprehenderit
                            nostrum quidem exercitationem blanditiis est illum
                            pariatur veritatis magni corporis!
                        </p>
                        <Modal
                            {...args}
                            ElementActionModalActive={
                                <Button>Button Modal 6</Button>
                            }
                            type="top"
                        >
                            <h1>Title 6</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Molestias error illo iusto, ex
                                esse ullam aliquam officia praesentium labore
                                reprehenderit nostrum quidem exercitationem
                                blanditiis est illum pariatur veritatis magni
                                corporis!
                            </p>
                            <Modal
                                {...args}
                                ElementActionModalActive={
                                    <Button>Button Modal 7</Button>
                                }
                                type="layout-grid"
                            >
                                <h1>Title 7</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Molestias error illo
                                    iusto, ex esse ullam aliquam officia
                                    praesentium labore reprehenderit nostrum
                                    quidem exercitationem blanditiis est illum
                                    pariatur veritatis magni corporis!
                                </p>
                            </Modal>
                        </Modal>
                    </Modal>
                </Modal>
            </Modal>
        </Modal>
    </Modal>
);

export const ModalInModal = ModalInModal_.bind({});
ModalInModal.args = {} as ModalProps;
