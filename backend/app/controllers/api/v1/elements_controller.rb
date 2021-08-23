class Api::V1::ElementsController < ApplicationController

    def index
        elements = Element.all
        render json: ElementSerializer.new(elements)
    end

    def create 
        element = Element.new(element_params)
        if element.save
            render json: ElementSerializer.new(element), status: :accepted
          else
            render json: {errors: element.errors.full_messages}, status: :unprocessible_entity
          end
    end

    def show 

    end

    private 

    def element_params
        params.require(:element).permit(:characters, :colors, :placements, :font_family, :composition_id)
    end

end
