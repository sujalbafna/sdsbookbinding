// @ts-nocheck
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { getInstantPriceEstimation } from '@/app/actions';
import type { PriceEstimationOutput } from '@/ai/flows/instant-price-estimation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Upload, File, Sparkles, Wand2 } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const FormSchema = z.object({
  documentType: z.string({ required_error: 'Please select a document type.' }),
  pageCount: z.coerce.number().min(1, 'At least one page is required.').max(1000),
  paperType: z.string({ required_error: 'Please select a paper type.' }),
  coverMaterial: z.string({ required_error: 'Please select a cover material.' }),
  bindingStyle: z.string({ required_error: 'Please select a binding style.' }),
  quantity: z.coerce.number().min(1, 'Quantity must be at least 1.').max(500),
  estimatedAvailability: z.string({ required_error: 'Please select availability.' }),
});

export function PriceEstimator() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [estimation, setEstimation] = useState<PriceEstimationOutput | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pageCount: 100,
      quantity: 1,
      estimatedAvailability: 'high',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setEstimation(null);
    startTransition(async () => {
      const { data: result, error } = await getInstantPriceEstimation(data);
      if (error) {
        toast({
          title: 'Error',
          description: error,
          variant: 'destructive',
        });
      } else {
        setEstimation(result);
      }
    });
  }

  return (
    <section id="estimate" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Instant Price Estimator</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Upload your document, select your binding options, and let our AI provide you with an instant price quote based on real-time material availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Customize Your Book</CardTitle>
              <CardDescription>Fill in the details below to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="documentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Document Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select a document type" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="thesis">Thesis / Dissertation</SelectItem>
                            <SelectItem value="report">Report / Manual</SelectItem>
                            <SelectItem value="book">Book / Novel</SelectItem>
                            <SelectItem value="portfolio">Portfolio</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="paperType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Paper Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger><SelectValue placeholder="Select paper" /></SelectTrigger></FormControl>
                            <SelectContent>
                              <SelectItem value="standard">Standard (80gsm)</SelectItem>
                              <SelectItem value="glossy">Glossy (120gsm)</SelectItem>
                              <SelectItem value="archival">Archival (150gsm)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="coverMaterial"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cover Material</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger><SelectValue placeholder="Select cover" /></SelectTrigger></FormControl>
                            <SelectContent>
                              <SelectItem value="softcover">Softcover</SelectItem>
                              <SelectItem value="hardcover">Hardcover</SelectItem>
                              <SelectItem value="leather">Leather</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="bindingStyle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Binding Style</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger><SelectValue placeholder="Select binding" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="perfect-bind">Perfect Bind</SelectItem>
                            <SelectItem value="spiral-bind">Spiral Bind</SelectItem>
                            <SelectItem value="case-bind">Case Bind</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pageCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Page Count: {field.value}</FormLabel>
                        <FormControl>
                          <Slider
                            min={1} max={1000} step={1}
                            onValueChange={(value) => field.onChange(value[0])}
                            defaultValue={[field.value]}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity</FormLabel>
                          <FormControl><Input type="number" min="1" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="estimatedAvailability"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Material Availability</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger><SelectValue placeholder="Select availability" /></SelectTrigger></FormControl>
                            <SelectContent>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>Simulates real-time supply.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg" disabled={isPending}>
                    {isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Wand2 className="mr-2 h-5 w-5" />}
                    Calculate Price
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Upload Your File</CardTitle>
              </CardHeader>
              <CardContent>
                <label
                  htmlFor="file-upload"
                  className="relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-background hover:bg-muted transition-colors"
                >
                  {fileName ? (
                    <div className="text-center">
                      <File className="mx-auto h-12 w-12 text-primary" />
                      <p className="mt-2 font-semibold text-primary">{fileName}</p>
                      <p className="text-sm text-muted-foreground">Click to choose a different file</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">PDF, DOC, JPG, PNG (MAX. 800x400px)</p>
                    </div>
                  )}
                  <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                </label>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-primary/90 to-accent/90 text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><Sparkles /> AI-Powered Estimate</CardTitle>
              </CardHeader>
              <CardContent>
                {isPending && (
                  <div className="space-y-4">
                    <Skeleton className="h-16 w-1/2 bg-white/20" />
                    <Skeleton className="h-10 w-full bg-white/20" />
                    <Skeleton className="h-10 w-3/4 bg-white/20" />
                  </div>
                )}
                {estimation && !isPending && (
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-widest">Estimated Price</p>
                    <p className="text-5xl font-bold">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: estimation.currency || 'USD',
                      }).format(estimation.estimatedPrice)}
                    </p>
                    <p className="text-sm pt-4 font-semibold">Cost Breakdown:</p>
                    <p className="text-sm opacity-90">{estimation.breakdown}</p>
                  </div>
                )}
                {!estimation && !isPending && (
                   <p className="text-center text-lg opacity-80 py-8">Your price estimate will appear here.</p>
                )}
              </CardContent>
              {estimation && !isPending && (
                <CardFooter>
                  <Button variant="secondary" className="w-full">Place Order</Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
