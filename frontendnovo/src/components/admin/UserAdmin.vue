<template>
  <div class="user-admin">
    <form @submit.prevent="save">
      <input type="hidden" id="user-id" v-model="user.id" />
      <div class="row mt-3">
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label for="user-name">Nome</label>
            <input
              id="user-name"
              type="text"
              class="form-control"
              v-model="user.name"
              placeholder="Informe o nome do usuário"
            />
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label for="user-email">E-mail</label>
            <input
              id="user-email"
              type="email"
              class="form-control"
              v-model="user.email"
              placeholder="Informe o e-mail do usuário"
            />
          </div>
        </div>
      </div>

      <div class="form-check mt-3 mb-3">
        <input
          id="user-admin"
          type="checkbox"
          class="form-check-input"
          v-model="user.admin"
        />
        <label class="form-check-label" for="user-admin">Administrador?</label>
      </div>

      <div class="row mb-3">
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label for="user-password">Senha</label>
            <input
              id="user-password"
              type="password"
              class="form-control"
              v-model="user.password"
              placeholder="Informe a senha do usuário"
            />
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label for="user-confirm-password">Confirmar Senha</label>
            <input
              id="user-confirm-password"
              type="password"
              class="form-control"
              v-model="user.confirmPassword"
              placeholder="Confirme a senha do usuário"
            />
          </div>
        </div>
      </div>

      <button class="btn btn-primary" v-if="mode === 'save'" type="submit">
        Salvar
      </button>
      <button class="btn btn-danger" v-if="mode === 'remove'" @click="remove">
        Excluir
      </button>
      <button class="btn btn-secondary ms-2" @click="reset">Cancelar</button>
    </form>
    <hr />

    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th v-for="field in fields" :key="field.key">
            {{ field.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td v-for="field in fields" :key="field.key">
            <template v-if="field.key === 'admin'">
              {{ user[field.key] ? "Sim" : "Não" }}
            </template>
            <template v-else-if="field.key === 'actions'">
              <button class="btn btn-warning" @click="loadUser(user)">
                <i class="fa fa-pencil"></i>
              </button>
              <button
                class="btn btn-danger ms-2"
                @click="loadUser(user, 'remove')"
              >
                <i class="fa fa-trash"></i>
              </button>
            </template>
            <template v-else>
              {{ user[field.key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { backApiUrl } from "@/global";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { successToastOptions, errorToastOptions } from "@/config/msgs.js";

export default {
  name: "UserAdmin",
  data() {
    return {
      mode: "save",
      user: {},
      users: [],
      fields: [
        { key: "id", label: "Código", sotable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin",
          label: "Admin",
          sortable: true,
          formatter: (value) => (value ? "Sim" : "Não"),
        },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadUsers() {
      const url = `${backApiUrl}/users`;
      axios.get(url).then((res) => {
        this.users = res.data;
      });
    },
    reset() {
      this.mode = "save";
      this.user = {};
      this.loadUsers();
    },
    save() {
      const method = this.user.id ? "put" : "post";
      const id = this.user.id ? `/${this.user.id}` : "";
      console.log(method, id);
      console.log(this.user);
      axios[method](`${backApiUrl}/users${id}`, this.user)
        .then(() => {
          toast.success("Usuário salvo", successToastOptions);
          this.reset();
        })
        .catch((error) => {
          toast.error(error.response.data, errorToastOptions);
        });
    },
    remove() {
      const id = this.user.id;
      axios
        .delete(`${backApiUrl}/users/${id}`)
        .then(() => {
          toast.success("Usuário removido", successToastOptions);
          this.reset();
        })
        .catch((error) => {
          toast.error(error.response.data.message, errorToastOptions);
        });
    },
    loadUser(user, mode = "save") {
      this.mode = mode;
      this.user = { ...user };
    },
    setMode(mode) {
      this.mode = mode;
      // Outras lógicas relacionadas ao modo, se necessário
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style scoped></style>
