<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Notifications\SendEmailToClients;
use Notification;

class SendEmailToClientJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $client;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($client)
    {
        $this->client=$client;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $client= $this->client;
            Notification::route('mail', $client->email)->notify(new SendEmailToClients($client) );

    }
}
