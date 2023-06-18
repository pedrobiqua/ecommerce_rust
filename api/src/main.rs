// use actix_web::*;
// use serde::Serialize;

// mod routes;
// use routes::ping::{ping};
// use routes::info::{info};
// use routes::catalogo::{catalogo};

mod handler;
mod model;
mod response;

use actix_cors::Cors;
use actix_web::middleware::Logger;
use actix_web::{http::header, web, App, HttpServer};
use model::AppState;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Inicializa o logger
    if std::env::var_os("RUST_LOG").is_none() {
        std::env::set_var("RUST_LOG", "actix_web=info");
    }
    env_logger::init();

    let todo_db = AppState::init();
    let app_data = web::Data::new(todo_db);

    // Porta em que o servidor vai rodar
    let porta = 8080;

    // Mensagem de sucesso
    println!("🚀 Servidor aberto com sucesso");
    println!(
        "Servidor conectado \n link: http://localhost:{}", porta
    );

    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin("http://127.0.0.1:5500")
            .allowed_origin("http://127.0.0.1:5500/")
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![
                header::CONTENT_TYPE
                // header::AUTHORIZATION,
                // header::ACCEPT,
            ])
            .supports_credentials();
        App::new()
            .app_data(app_data.clone())
            .configure(handler::config)
            .wrap(cors)
            .wrap(Logger::default())
    })
    .bind(("127.0.0.1", porta))?
    .run()
    .await
}