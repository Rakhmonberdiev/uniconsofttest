import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class DocumentSignalService {
  private hubConnection!: HubConnection;
  private readonly baseUrl = environment.apiUrl + 'hubs/';
  startConnection(onUpdate: (type: string, count: number) => void): void {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.baseUrl + 'document', {
        withCredentials: true,
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('успешно'))
      .catch((err) => console.error('ошибка'));
    this.hubConnection.on(
      'DocumentUpdated',
      (data: { type: string; count: number }) => {
        onUpdate(data.type, data.count);
      }
    );
  }
  stopConnection(): void {
    if (this.hubConnection) {
      this.hubConnection.stop();
    }
  }
}
