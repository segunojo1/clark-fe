import axios from "axios";

export class WaitlistService {
    static BASE_URL = "https://clark-v2-0.onrender.com";

    static async JoinWaitlist(payload: {name: string, email: string}) {
        try {
            const response = await axios.post(`${this.BASE_URL}/api/v1/waitlist`, 
              payload, {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            
            return response.data;
          } catch (error) {
            console.error("Error registering user:", error);
            throw error;
          }
    }
}