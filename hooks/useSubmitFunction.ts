"use client";

import { ActionResponse } from "@/common/definitions";
import { useEffect, useRef, useState } from "react";

const useSubmitFunction = (
  submit: (...params: any[]) => Promise<ActionResponse | void>,
  handleExpectedErrors: (error: ActionResponse) => void,
  handleUnexpectedErrors: () => void
) => {
  const initialRenderRef = useRef(true);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const callSubmission = (...params: any[]) => {
    setData(params);
    initialRenderRef.current = false;
  };

  useEffect(() => {
    const submissionHandler = async () => {
      setIsLoading(true);
      try {
        const result = await submit(...data);
        if (typeof result === "object" && !result.success) {
          handleExpectedErrors(result);
        }
      } catch (error) {
        handleUnexpectedErrors();
      } finally {
        setIsLoading(false);
      }
    };

    if (!initialRenderRef.current) {
      submissionHandler();
    }
  }, [data]);

  return { isLoading, callSubmission };
};

export default useSubmitFunction;
