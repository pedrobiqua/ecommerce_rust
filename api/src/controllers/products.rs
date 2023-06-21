// TODO: Adicionar as funcionalidades dos produtos, do lado da loja, como adicionar, remover, editar, etc.
// TODO: Montar uma tela de vendas, nela vou ter que ter uma aba de busca, aba de produtos, e separar por categoria

use crate::{
    models::products_models::{ProductsModel, ProductsModelResponse},
    schema::{CreateNoteSchema, FilterOptions, UpdateNoteSchema},
    AppState,
};
use actix_web::{delete, get, patch, post, web, HttpResponse, Responder};
use serde_json::json;

#[get("/products")]
pub async fn note_list_handler(
    opts: web::Query<FilterOptions>,
    data: web::Data<AppState>,
) -> impl Responder {
    
    HttpResponse::Ok()
}

#[post("/notes/")]
async fn create_note_handler(
    body: web::Json<CreateNoteSchema>,
    data: web::Data<AppState>,
) -> impl Responder {
    HttpResponse::Ok()
}

#[get("/notes/{id}")]
async fn get_note_handler(
    path: web::Path<uuid::Uuid>,
    data: web::Data<AppState>,
) -> impl Responder {
    HttpResponse::Ok()
}

#[patch("/notes/{id}")]
async fn edit_note_handler(
    path: web::Path<uuid::Uuid>,
    body: web::Json<UpdateNoteSchema>,
    data: web::Data<AppState>,
) -> impl Responder {
    HttpResponse::Ok()
}

#[delete("/notes/{id}")]
async fn delete_note_handler(
    path: web::Path<uuid::Uuid>,
    data: web::Data<AppState>,
) -> impl Responder {
    HttpResponse::Ok()
}

/**
 * Essa função é responsável por configurar as rotas da controladora
 * @param conf: &mut web::ServiceConfig
 * @return void
 */
pub fn config(conf: &mut web::ServiceConfig) {
    let scope = web::scope("/api/v1/product")
        .service(note_list_handler)
        .service(create_note_handler)
        .service(get_note_handler)
        .service(edit_note_handler)
        .service(delete_note_handler);

    conf.service(scope);
}