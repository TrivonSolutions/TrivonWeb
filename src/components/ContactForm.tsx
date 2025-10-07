import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Navn er påkrævet" }).max(100, { message: "Navn må ikke være længere end 100 tegn" }),
  email: z.string().trim().email({ message: "Ugyldig e-mailadresse" }).max(255, { message: "E-mail må ikke være længere end 255 tegn" }),
  message: z.string().trim().min(1, { message: "Besked er påkrævet" }).max(1000, { message: "Besked må ikke være længere end 1000 tegn" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate form submission to a dummy endpoint
    console.log("Form submitted:", data);
    
    // Show success message
    setIsSubmitted(true);
    toast({
      title: "Tak for din henvendelse!",
      description: "Vi vender tilbage snarest.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-primary/10 border border-primary rounded-lg p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold text-primary mb-2">
          Tak for din henvendelse!
        </h3>
        <p className="text-foreground">
          Vi vender tilbage snarest.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Navn</FormLabel>
              <FormControl>
                <Input placeholder="Dit navn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="din@email.dk" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Besked</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Fortæl os om dit projekt..." 
                  className="min-h-[150px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          size="lg" 
          className="w-full hover:shadow-lg hover:scale-105 transition-all"
        >
          Send besked
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
