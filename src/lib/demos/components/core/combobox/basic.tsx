"use client";

import React from "react";
import {
  OverlayTriggerStateContext,
  PopoverContext,
  useContextProps,
  type PopoverProps,
} from "react-aria-components";
import { useOverlayTriggerState } from "react-stately";
import {
  ComboboxRoot,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from "@/lib/components/core/default/combobox";

export default function ComboboxDemo() {
  return (
    <ComboboxRoot menuTrigger="focus">
      <ComboboxInput className="w-[200px]" placeholder="Select an animal..." />
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
          <ComboboxItem textValue="Cat">Cat</ComboboxItem>
          <ComboboxItem textValue="Dog">Dog</ComboboxItem>
          <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem textValue="Panda">Panda</ComboboxItem>
          <ComboboxItem textValue="Snake">Snake</ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </ComboboxRoot>
  );
}

const CustomPopover = React.forwardRef(
  (props: PopoverProps, ref: React.ForwardedRef<HTMLElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, PopoverContext);
    const contextState = React.useContext(OverlayTriggerStateContext);
    const localState = useOverlayTriggerState(props);
    const state =
      props.isOpen != null || props.defaultOpen != null || !contextState
        ? localState
        : contextState;

    if (state && !state.isOpen) {
      return null;
    }

    return <div ref={ref} {...props} />;

    // return <div {...props} />;
  }
);
CustomPopover.displayName = "CustomPopover";