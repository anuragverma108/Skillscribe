import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import 'tailwindcss/tailwind.css';


const ConversationPage = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm({
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: { prompt: string }) => {
    try {
      const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
      const newMessages = [...messages, userMessage];
      
      const response = await axios.post('/api/conversation', { messages: newMessages });
      setMessages((current) => [...current, userMessage, response.data]);
      
      form.reset();
    } catch (error: any) {
      console.error("Error generating code:", error);
    } finally {
      // Refreshing the router
    }
  }

  return ( 
    <div>
      <div className="px-4 lg:px-8">
        <div>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="
              rounded-lg 
              border 
              w-full 
              p-4 
              px-3 
              md:px-6 
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2
            "
          >
            <div className="col-span-12 lg:col-span-10">
              <input
                type="text"
                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full"
                disabled={isLoading} 
                placeholder="How do I calculate the radius of a circle?" 
                {...form.register("prompt")}
              />
            </div>
            <button 
              className="col-span-12 lg:col-span-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              type="submit" 
              disabled={isLoading}
            >
              Generate
            </button>
          </form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              Loading...
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <div className="text-center p-4">No conversation started.</div>
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`p-8 w-full flex items-start gap-x-8 rounded-lg ${
                  message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                }`}
              >
                <p className="text-sm">
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default ConversationPage;
