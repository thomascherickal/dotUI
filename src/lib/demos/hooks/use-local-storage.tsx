"use client";

import * as React from "react";
import { Button } from "@/lib/components/core/default/button";
import { Textarea } from "@/lib/components/core/default/textarea";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";

export default function Demo() {
  const [writing, saveWriting] = useLocalStorage<string | null>("writing", null);
  const [input, setInput] = React.useState(writing ?? "");

  return (
    <div className="w-full max-w-sm">
      <Textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Start your writing here, save it and refresh the page to see it persist."
      />
      <div className="mt-4 flex items-center justify-end space-x-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setInput("");
            saveWriting(null);
          }}
        >
          Clear
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={() => {
            saveWriting(input);
            // TODO: toast notification
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}