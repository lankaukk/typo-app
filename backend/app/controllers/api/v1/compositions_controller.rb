class Api::V1::CompositionsController < ApplicationController

    def index
        compositions = Composition.all
        render json: CompositiionSerializer.new(compositions)
    end

    # def create 
    #     composition = Composition.new(composition_params)
    # end

    # def show 

    # end

    # private 

    # def composition_params
    #     params.require(:composition).permit(:artist, :created_at)
    # end

end
