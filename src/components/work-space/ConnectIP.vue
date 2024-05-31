<script>
  export default {
    data() {
      return {
        ipAddress: '',
        copyMessage: '',
        messageColor: 'black',
      };
    },
    methods: {
      fetchIpAddress() {
        fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => {
            this.ipAddress = data.ip;
          })
          .catch(error => {
            console.error('Error fetching IP address:', error);
            this.ipAddress = 'Unable to fetch IP address';
          });
      },
      copyIpAddress() {
        navigator.clipboard.writeText(this.ipAddress)
          .then(() => {
            this.copyMessage = 'IP Address copied to clipboard!';
            this.messageColor = 'green';
          })
          .catch(err => {
            console.error('Failed to copy IP address: ', err);
            this.copyMessage = 'Failed to copy IP address!';
            this.messageColor = 'red';
          });
      }
    },
    mounted() {
      this.fetchIpAddress();
    }
  };
</script>

<template>
  <div class="tampilkan-ip">
    <p id="ip-address" :style="{ color: 'orange' }">{{ ipAddress }}</p>
    <button @click="copyIpAddress">Copy IP Address</button>
    <span :style="{ color: messageColor }">{{ copyMessage }}</span>
  </div>
</template>