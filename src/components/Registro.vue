<template>
  <div id="registro">
    <b-form id="form" @submit="onSubmit" @reset="onReset" v-if="show">
      

      <b-form-group id="input-group-1" label="Tu nombre:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Ingresa tu nombre"
        ></b-form-input>

      </b-form-group>
       <b-form-group id="input-group-2" label="Tu apellido:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.apellido"
          required
          placeholder="Ingresa tu apellido"
        ></b-form-input>
      </b-form-group>

     
       <b-form-group id="input-group-3" label="Tu dni:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.dni"
          required
          placeholder="Ingresa tu DNI"
        ></b-form-input>
      </b-form-group>

      
      
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          apellido: '',
          dni:  ''
        },
       
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        this.$store.dispatch('agregarUsuario', this.form)
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        
        this.form.name = ''
        this.form.apellido = ''
        this.form.dni = ''
       
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
 #registro {
    
    display: inline-block;
    text-align: center;
 }
</style>