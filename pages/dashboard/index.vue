<template>
  <div class="container-fluid">

    <template>
  <v-card
    class="overflow-hidden"
    color="purple lighten-1"
    dark
  >
    <v-toolbar
      flat
      color="purple"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        User Profile
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="purple darken-3"
        fab
        small
        @click="isEditing = !isEditing"
      >
        <v-icon v-if="isEditing">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="Name"
      ></v-text-field>
      <v-autocomplete
        :disabled="!isEditing"
        :items="states"
        return-object
        color="white"
        item-text="nama"
        label="State"
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isEditing"
        color="success"
        @click="save"
      >
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Your profile has been updated
    </v-snackbar>
  </v-card>
</template>

  </div>

  
</template>

<script>
  export default {
    data () {
      return {
        hasSaved: false,
        isEditing: null,
        model: null,
        states: [
{
kode_wilayah: "010000 ",
nama: "Prov. D.K.I. Jakarta",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "020000 ",
nama: "Prov. Jawa Barat",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "030000 ",
nama: "Prov. Jawa Tengah",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "040000 ",
nama: "Prov. D.I. Yogyakarta",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "050000 ",
nama: "Prov. Jawa Timur",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "060000 ",
nama: "Prov. Aceh",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "070000 ",
nama: "Prov. Sumatera Utara",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "080000 ",
nama: "Prov. Sumatera Barat",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "090000 ",
nama: "Prov. Riau",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "100000 ",
nama: "Prov. Jambi",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "110000 ",
nama: "Prov. Sumatera Selatan",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "120000 ",
nama: "Prov. Lampung",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "130000 ",
nama: "Prov. Kalimantan Barat",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "140000 ",
nama: "Prov. Kalimantan Tengah",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "150000 ",
nama: "Prov. Kalimantan Selatan",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "160000 ",
nama: "Prov. Kalimantan Timur",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "170000 ",
nama: "Prov. Sulawesi Utara",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "180000 ",
nama: "Prov. Sulawesi Tengah",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "190000 ",
nama: "Prov. Sulawesi Selatan",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "200000 ",
nama: "Prov. Sulawesi Tenggara",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "210000 ",
nama: "Prov. Maluku",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "220000 ",
nama: "Prov. Bali",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "230000 ",
nama: "Prov. Nusa Tenggara Barat",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "240000 ",
nama: "Prov. Nusa Tenggara Timur",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "250000 ",
nama: "Prov. Papua",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "260000 ",
nama: "Prov. Bengkulu",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "270000 ",
nama: "Prov. Maluku Utara",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "280000 ",
nama: "Prov. Banten",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "290000 ",
nama: "Prov. Kepulauan Bangka Belitung",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "300000 ",
nama: "Prov. Gorontalo",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "310000 ",
nama: "Prov. Kepulauan Riau",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "320000 ",
nama: "Prov. Papua Barat",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "330000 ",
nama: "Prov. Sulawesi Barat",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "340000 ",
nama: "Prov. Kalimantan Utara",
mst_kode_wilayah: "000000 "
},
{
kode_wilayah: "350000 ",
nama: "Luar Negeri",
mst_kode_wilayah: "000000 "
}
        ],
      }
    },

    methods: {
      customFilter (item, queryText, itemText) {
        const textOne = item.name.toLowerCase()
        const textTwo = item.abbr.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
      },
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    },
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
